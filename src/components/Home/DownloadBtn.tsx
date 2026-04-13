const DownloadBtn = () => {
  const fileUrl = "/FullStack_MdShafikulIslam.pdf";

  return (
    <div>
      <a download href={fileUrl} rel="noopener noreferrer" target="_blank">
        <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed font-bold tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,238,252,0.4)] transition-all active:scale-95 duration-200 font-headline text-xs">
          RESUME_DOWNLOAD
        </button>
      </a>
    </div>
  );
};

export default DownloadBtn;
