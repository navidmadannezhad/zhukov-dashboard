type Props = {
  pages: any;
  currentPage: number;
  setCurrentPage: any;
};

export default function Pagination(props: Props) {
  const pageNumbers = [...Array(props.pages + 1).keys()].slice(1);

  return (
    <nav className="flex justify-center items-center mt-5">
      <ul className="flex gap-5">
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`flex justify-center items-center ${
              props.currentPage == pgNumber ? "bg-transparentPurple text-white rounded-full w-6 h-6" : ""
            } `}
          >
            <a
              onClick={() => props.setCurrentPage(pgNumber)}
              className="mt-1"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
