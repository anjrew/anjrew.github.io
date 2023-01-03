import cv2
import argparse
import os

parser = argparse.ArgumentParser(
                    prog = 'Convert images',
                    description = 'Converts images to a standard type of the application to use',
                    epilog = 'Text at the bottom of help')

parser.add_argument('-i',
    dest='input_path', 
    type=str, 
    default=None, help='The input image file path to convert')
parser.add_argument('-o',
    dest='output_path', 
    type=str, 
    default=None, help='The output images folder path')
parser.add_argument('-t',
    dest='type', 
    type=str, 
    default='icon', 
    choices=['icon', 'tech', 'image', 'screen_shot'],  
    help='The type of image to convert for')


def convert_file(dimension:int):
    """
    Converts an image file to a standard type of the application
    """
    output_path = f'{output_folder}/{dimension}_{file_name}'
    print('Saving image to ', output_path)
    cv2.imwrite(# type: ignore 
        output_path, 
        cv2.resize(img, (dimension, dimension)) # type: ignore 
    )

args = vars(parser.parse_args())

output_folder = args['output_path']
input_file_path = args['input_path']

head, tail = os.path.split(input_file_path)
file_name = tail
file_ext = file_name.split('.')[1]

#read image
img=cv2.imread(input_file_path)

image_width = img.shape[1]
image_height = img.shape[0]
crop_size = image_width if image_width < image_height else image_height


print('Image Width is',image_width)
print('Image Height is',image_height)
print('crop_size is',crop_size )

img = img[0:crop_size, 0:crop_size]

if args['type'] == 'icon':
    convert_file(200)
    convert_file(350)
elif args['type'] == 'tech':
    convert_file(60)
    convert_file(100)
elif args['type'] == 'image':
    convert_file(100)
    convert_file(300)
elif args['type'] == 'image':
    convert_file(100)
    convert_file(300)
elif args['type'] == 'screen_shot':
    convert_file(100)
    convert_file(300)

