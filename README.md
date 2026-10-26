# MeiLi — upload-ready website

The entire website and browser AI model are included. No npm installation, build command, backend, API key or custom GitHub Actions workflow is needed.

## Publish

1. Extract MeiLi-Upload-Ready.zip.
2. Create a new empty PUBLIC GitHub repository named meili-website. Leave Add README off and choose No .gitignore.
3. Install GitHub Desktop from https://desktop.github.com and sign in.
4. In Desktop, select File > Clone repository, choose meili-website and Clone. Choose Repository > Show in Explorer.
5. Copy ALL extracted files and folders into that cloned folder. index.html must be directly inside the repository, next to assets/, vendor/ and visual-model/. Include .nojekyll and .gitignore. Do not copy an extra enclosing folder or the ZIP itself.
6. In GitHub Desktop, enter Add MeiLi website in Summary, click Commit to main, then Push origin. All files upload together.
7. On GitHub, open the repository > Settings > Pages. Select Deploy from a branch, choose main and / (root), then Save. Do not choose GitHub Actions for this package.
8. Wait for deployment, then open the published URL shown in Settings > Pages: https://YOUR-USERNAME.github.io/meili-website/ (replace YOUR-USERNAME).

GitHub does not automatically extract uploaded ZIPs. Extract first. The website uploader accepts at most 100 files per batch, so GitHub Desktop is easier for uploading everything at once. Each supplied file is below 25 MiB. Use a fresh empty repository so an old build workflow does not run against this static package.

## Later updates

Replace or edit files in the cloned folder, commit and Push origin. Pages republishes automatically.

## Model and limits

The existing experimental zero-shot CLIP/ONNX model runs in each visitor's browser using WASM. All 11 weight chunks and runtime files are included. Initial loading downloads roughly 89 MB of weights plus runtime/assets; older or low-memory devices may struggle. Photos are not uploaded for inference. Camera capture requires HTTPS and browser permission; GitHub Pages supplies HTTPS. Model accuracy is unchanged and is not clinically validated.

This folder is the production output of the verified deployment export, which passed 20 tests, a clean build and real browser/WASM model execution under a repository subpath. Runtime files, model weights and artwork are unchanged by this simpler packaging. Deployment to your GitHub account and physical phone camera remain to be checked.

## Troubleshooting

If the page is missing, check that index.html is at the repository root and Pages uses main / (root). Wait for the Pages deployment to finish. If artwork/model files fail, verify assets/, vendor/ and all 11 visual-model/clip-*.bin files were pushed. Open the HTTPS website, not index.html by double-clicking. Asset and model credits remain in THIRD_PARTY.md and included license files.
