import AdUnit from "./AdUnit";

export default function AdBanner() {
  return (
    <div className="ad-banner" aria-label="Advertisement">
      <span className="ad-banner-label">Advertisement</span>
      <AdUnit
        className="ad-banner-frame"
        config={`atOptions = {
  'key' : '1d6436ef23fab74250a72f38d8291c4f',
  'format' : 'iframe',
  'height' : 60,
  'width' : 468,
  'params' : {}
};`}
        src="https://www.highperformanceformat.com/1d6436ef23fab74250a72f38d8291c4f/invoke.js"
      />
    </div>
  );
}
