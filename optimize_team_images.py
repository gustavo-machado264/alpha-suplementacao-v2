from pathlib import Path
from PIL import Image

folder = Path('/home/ubuntu/alpha-suplementacao-v2/client/images')
for path in sorted(folder.glob('team-*.jpg')):
    with Image.open(path) as image:
        image = image.convert('RGB')
        image.thumbnail((420, 420), Image.Resampling.LANCZOS)
        image.save(path, format='JPEG', quality=82, optimize=True, progressive=True)
        print(path.name, image.size)

pure = Path('/home/ubuntu/alpha-suplementacao-pure/images')
pure.mkdir(parents=True, exist_ok=True)
for path in folder.glob('team-*.jpg'):
    target = pure / path.name
    target.write_bytes(path.read_bytes())
