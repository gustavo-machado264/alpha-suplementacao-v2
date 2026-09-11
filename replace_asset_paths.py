from pathlib import Path
import re

root = Path('/home/ubuntu/alpha-suplementacao-v2')
log = (root / 'asset-upload-results.txt').read_text()
# Parse the upload summary lines: local source -> public storage path.
mapping = {}
for line in log.splitlines():
    m = re.match(r'\[SUCCESS\] client/images/(.+?) -> (\/manus-storage\/\S+)', line)
    if m:
        local = 'images/' + m.group(1)
        public = m.group(2)
        mapping[local] = public

files = [root / 'client/index.html', root / 'client/script.js', root / 'client/style.css']
for path in files:
    text = path.read_text()
    for local, public in mapping.items():
        text = text.replace(local, public)
    path.write_text(text)

print(f'Replaced {len(mapping)} asset paths across {len(files)} frontend files.')
for local, public in sorted(mapping.items()):
    print(local, '->', public)
