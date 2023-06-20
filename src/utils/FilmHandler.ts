class FilmHandler {
    data: any = {
        create: [],
        update: [],
        delete: []
    }

    formatIsValid(imdb_id: any){
        if(!/tt\d+/.test(imdb_id)){
            throw "آیدی نامعتبر فیلم";
        }
        return;
    }

    filmIsNotRepeated(imdb_id: any){
        let repeated = !!this.data.create.filter((film: any) => {if(film.imdb_id === imdb_id) { return film }}).length;
        if(repeated){
            throw "فیلم تکراری"
        }
        return;
    }

    addToCreate(film: any){
        try{
            this.formatIsValid(film.imdb_id);
            this.filmIsNotRepeated(film.imdb_id);
            this.data.create.push(film);
        }catch(err){
            throw err;
        }
    }
}

export {};