import ImagePicker from 'react-native-image-crop-picker';

export const openImagePicker = type => {
    if (type === "camera") {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    else if (type === "picker") {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }

}