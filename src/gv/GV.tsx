// import { useTranslate } from "@/utils/i18n";

const GV = () => {
  return (
  // const t = useTranslate();
    // <!-- Uniform top-right button -->
    <>
    
    <style>
      @import "https://public.gv.je/static/web/gvbtn/gvbtn.css";
    </style>
    <a href="https://www.gv.je"
   className="site-action-button"
  //  aria-label="{t('common.gogv')}">
   aria-label="GV">
    <img src="https://public.gv.je/static/web/gvbtn/gv-logo-512x512.png" className="site-action-button-img"></img>
    </a>
    </>
  );
};

export default GV;