// Navigation only: consume an existing subtype without changing its display or scoring.
export function getHairRoutineHref(hairType){
 if(typeof hairType!=='string')return null;
 const match=/^(?:type\s*)?([1-4])\s*[abc]$/i.exec(hairType.trim());
 return match?`#hair-tutorial/${match[1]}`:null;
}
export function hairRoutineLink(hairType){
 const href=getHairRoutineHref(hairType);
 return href?`<div class="actions" style="margin:24px 0"><a class="primary" style="min-height:48px" href="${href}" data-result-routine>VIEW MY HAIR ROUTINE ↗</a></div>`:'';
}
