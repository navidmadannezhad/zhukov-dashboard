import React, { EventHandler, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useSession } from 'next-auth/react';

const plugins = 'preview importcss tinydrive searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons';

const toolbar = 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor permanentpen removeformat | pagebreak | charmap emoticons | fullscreen preview save | insertfile image media template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment';

const content_style = 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }';

interface Props{
    data: any;
    setEditorData: EventHandler<any>;
}

const TinyEditor = ({ data, setEditorData }: Props) => {
  const editorRef = useRef<any>(null);

  return (
    <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={data as any}
        init={{
            height: 500,
            menubar: false,
            plugins: plugins,
            toolbar: toolbar,
            content_style: content_style,
            file_picker_callback: (cb: any, value: any, meta: any) => {
                let input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');
            
                input.onchange = function () {
                    let file = (this as any).files[0];
            
                    let reader = new FileReader() as any;
                    reader.onload = () => {
                        let id = 'blobid' + (new Date()).getTime();
                        let blobCache =  editorRef.current?.editorUpload.blobCache;
                        let base64 = reader.result.split(',')[1];
                        let blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);
                        cb(blobInfo.blobUri(), { title: file.name });
                    };
                    reader.readAsDataURL(file);
                };
                
                input.click();
            },
        }}
        onSubmit={(e: any, editor: any) => {
            setEditorData(editor.getContent());
        }}
    />
  );

}

export default TinyEditor;