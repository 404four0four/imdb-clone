export default function loading() {
    return (
        <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-white dark:bg-[#000000] flex justify-center items-center">
            <img src="spinner.svg" alt="loading" />
        </div>
    );
};
