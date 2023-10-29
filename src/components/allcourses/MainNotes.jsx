import React from 'react';
import Box from './Box';

const MainNotes = () => {
  return (
    <>
    <hr />
        <div className="container">
        <div className="d-flex justify-content-center ">
  <h4 className="text-center font-xs text-primary">Notes for All grades</h4>
  <br />
</div>
      <div className="row row-cols-4 row-cols-md-3 g-5 ">
        <div className="col mb-4 mx-4" >
          <Box name='Maths' url="https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_1280.jpg" dest="https://drive.google.com/drive/folders/18linFsfw9LDcayoecT-kW3u_saQy2OZt"/>
        </div>
        <div className="col mb-4 mx-5">
          <Box name='Science' url='https://tse3.mm.bing.net/th?id=OIP.Aaeho5g8Lifd87gBxFJahQHaEK&pid=Api&P=0&h=180' dest="https://drive.google.com/drive/folders/18linFsfw9LDcayoecT-kW3u_saQy2OZt" />
        </div>
        <div className="col mb-4 mx-4">
          <Box name='Social Science' url="https://tse4.mm.bing.net/th?id=OIP.8LvVE3zRENZxH4R5TC1OzwHaEg&pid=Api&P=0&h=180" dest="https://drive.google.com/drive/folders/18linFsfw9LDcayoecT-kW3u_saQy2OZt"/>
        </div>
        <div className="col mb-4 mx-5" >
          <Box name='IT' url='https://learn.g2.com/hubfs/What_is_Information_Technology.jpg' dest="https://drive.google.com/drive/folders/18linFsfw9LDcayoecT-kW3u_saQy2OZt"/>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default MainNotes;
