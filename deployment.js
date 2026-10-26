// Hosting metadata only; no API key, inference or user data.
export function projectSourceUrl(base=new URL('./',import.meta.url)){
 const host=base.hostname;
 if(host.endsWith('.github.io')){
  const owner=host.slice(0,-'.github.io'.length);
  const repo=decodeURIComponent(base.pathname.split('/').filter(Boolean)[0]||host);
  return `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/archive/refs/heads/main.zip`;
 }
 return new URL('README.md',base).href;
}
