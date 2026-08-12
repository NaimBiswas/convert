import AdUnit from "./AdUnit";

export default function SidebarAdSlot() {
  return (
    <div className="ad-slot" aria-label="Advertisement">
      <span className="ad-label">Advertisement</span>
      <AdUnit
        className="ad-frame"
        config={`atOptions = {
  'key' : 'b5efb7df9265ecc722618c33844fdcb7',
  'format' : 'iframe',
  'height' : 600,
  'width' : 160,
  'params' : {}
};`}
        src="https://www.highperformanceformat.com/b5efb7df9265ecc722618c33844fdcb7/invoke.js"
      />
    </div>
  );
}