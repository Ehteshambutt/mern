import { useState, useEffect } from "react";
import MultiImages from "./MultiImages";
import axios from 'axios';
import { toast } from 'react-toastify';
export default function Settings() {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])
  const addMenuItem = (item) => {
 const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'x-auth-token': sessionStorage.getItem('token'),
   },
    }
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      axios.post('/api/setting/assets', formData, config).then((q) => {
        toast("Product Added!", { type: 'success' })
      }).catch((err) => {
        console.log(err)
        console.log('workspace line 218')
      });
    }
    catch (err) {
      return err;
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSelectedFile("")
    alert("dg")
    addMenuItem({
      ...preview
    });
    // clearErrors();
  }
 const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)

      return
    }
    setSelectedFile(e.target.files[0])
  }
 return (<> <div class="container">
    <div class="row">
      <div class="col-6">
        <div className=' ml-2 mt-5 col'>
          <h1 > Settings</h1>
          <h2 className="mt-5"> Change logo</h2>
          <form class="form-card " onSubmit={handleOnSubmit}>
            <div class="row ">
              <div class="form-group col-sm-6 flex-column d-flex">
                <input type="file" id="myInput"
                  className="w-131 pr-0"
                  accept="image/png, image/jpeg"
                  onChange={onSelectFile}
                />
                {selectedFile && <img src={preview} width="200" height="200" alt="log" />}
              </div>
            </div>
            <div class="col d-flex ">
              <button type="submit" class="btn custom-button-primary">Change Logo</button>
            </div>
          </form>
        </div>
      </div><div class="col-6 mt-5">
        <MultiImages /> </div>  </div></div>
  </>
  );
}