import React, {useMemo, useState} from 'react';
import {TouchableOpacity, Dimensions, Modal, Image} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageZoom = ({image, style = {}}) => {
  const [zoomOpened, setZoomOpened] = useState(false);

  const imageSize = useMemo(() => {
    const imgSize = Image.resolveAssetSource(image);

    const width = Dimensions.get('window').width - 50;
    const height = (width / imgSize.width) * imgSize.height;

    return {
      width,
      height,
    };
  }, [image]);

  const switchZoomViewer = () => setZoomOpened((init) => !init);

  return (
    <>
      <TouchableOpacity
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 15,
          ...style
        }}
        onPress={switchZoomViewer}>
        <Image style={{...imageSize}} source={image} />
      </TouchableOpacity>

      <Modal visible={zoomOpened} transparent={true}>
        <ImageViewer
          enableSwipeDown
          onCancel={switchZoomViewer}
          imageUrls={[{url: '', props: {source: image}}]}
        />
      </Modal>
    </>
  );
};

export default ImageZoom;
