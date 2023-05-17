<template>
  <main>
    <section class="left_header">
      <div>
        <img
          src="~/assets/images/logo.svg"
          alt="Edgistify Logo"
          class="image"
        />
      </div>
    </section>
    <section class="main_content">
      <header>
        <nav>
          <div>
            <h3>Route Optimization</h3>
          </div>
        </nav>
      </header>
      <section class="warehouseContainer">
        <div class="warehouseAddress">
          <div>
            <span>Warehouse address: </span>
          </div>
          <input type="text" @input="changeValue" placeholder="Enter Warehouse Address" />
        </div>
        <div class="btnDiv">
          <button @click="saveAddress" class="primaryBtn">Save</button>
        </div>
      </section>
      <section class="mapContainer">
        <div class="fileUploadContainer">
          <div>
            <span>Upload file:</span>
          </div>
          <div class="fileUploadDiv">
            <label for="file-upload" class="customFileUpload">
              <img src="~/assets/images/UploadIcon.svg" alt="upload icon" />
              Choose files to upload <br />
              (.xlsx file only)
            </label>
            <input
              id="file-upload"
              type="file"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              @input="uploadProcess"
            />
            <div class="downloadfile">
              <a href="">Download template</a>
            </div>
            <button class="primaryBtn">Upload</button>
          </div>
        </div>
        <div class="mapView"></div>
      </section>
      <section class="addressTable">
        <table>
          <thead>
            <th>Drop point</th>
            <th>Consignee Name & Contact Number</th>
            <th>Address</th>
            <th>Pin Code</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Navigate</th>
          </thead>

            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>

        </table>
      </section>
    </section>
  </main>
</template>

<style lang="scss" module src="../assets/styles/_homepage.scss" />
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/xlsx.full.min.js"></script> -->


<script setup>
import readXlsxFile from 'read-excel-file'
var file ;
function uploadProcess(e){
  // console.log(e.target.value)
  file = e.target.value;
  console.log(file)
  readXlsxFile(e.target.files[0]).then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    console.log(rows)
  })
}



function saveAddress() {
  // console.log('Address Saved')
}
function changeValue(e) {
  // console.log(e.target.value)
}


</script>
