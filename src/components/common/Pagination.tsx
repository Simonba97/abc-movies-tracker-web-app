const Pagination = ({ currentPage, onPageChange }: { currentPage: number; onPageChange: (page: number) => void; }) => {
    return (
        <div id="contPagination" className="flex flex-col items-center space-y-1">
            <span className="font-light">Estás viendo la página {currentPage}</span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button className={`flex disabled items-center justify-center px-4 h-10 text-base font-light text-gray-300 bg-gray-700 rounded-s hover:bg-gray-900 ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    {"Anterior"}
                </button>
                <button className="flex items-center justify-center px-4 h-10 text-base font-light text-gray-300 bg-gray-700 border-0 border-s border-gray-300 rounded-e hover:bg-gray-900" onClick={() => onPageChange(currentPage + 1)}>
                    {"Siguiente"}
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div >
    );
}

export default Pagination