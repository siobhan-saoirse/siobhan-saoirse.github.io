# Script by Sour Dani for use with any fast-dl server.

from os import listdir
import zipfile

def main():
    extension = ".bsp"
    dir = "./"

    print("Beginning batch map compression.")
    for file in listdir(dir):
        if file.endswith(extension):
            print(f"Compressing: {file}")
            with zipfile.ZipFile(f'{dir}/{file}.bz2', 'w') as zip:
                zip.write(f'{dir}/{file}', arcname=file, compress_type=zipfile.ZIP_BZIP2)
    
    print("Batch map compression complete.")

if __name__ == "__main__":
    main()
