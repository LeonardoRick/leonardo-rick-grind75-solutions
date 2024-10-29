from os import listdir
from os.path import isfile, join
from collections import deque

def printnames(start_dir):
    for file in sorted(listdir(start_dir)):
        fullpath = join(start_dir, file)
        if isfile(fullpath):
            print(file)
        else:
            printnames(fullpath)

printnames('./')
