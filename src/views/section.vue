<template>
  <main id="sections">
      <section class="page-name">
          <div class="d-flex header">
            <div>
                <h6>Sections</h6>
                <p>Tuesday,June 14,2020</p>
            </div>
            <div class=" d-flex justify-content-end">
              <div class="right-page-name d-flex ">
                <div>
                    <p class="pt-3 pr-1">Sort By: </p>
                </div>
                <select class="custom-select mr-3" id="inputGroupSelect01">
                    <option selected>All</option>
                    <option value="1">Date</option>
                    <option value="2">Alphab</option>
                    <option value="3">Three</option>
                </select>
                <div>
                  <b-button v-b-modal.my-modal>Add New</b-button>
                </div>      
              </div>
            </div>   
          </div>
          <div>
                <!-- The modal -->
                <b-modal id="my-modal" hide-footer title="Create New Section">
                  <div class="pa-3">
                    <div class="fields mt-7">
                      <span class="">Name of Section</span>
                      <b-form-input id="input-small" class="py-3" size="sm" placeholder=""></b-form-input>
                    </div>
                    <div class="fields mt-7">
                      <span class="mt-3">Short description of Section</span>
                      <b-form-textarea id="textarea" v-model="text" placeholder="" rows="2" max-rows="2"></b-form-textarea>
                    </div>
                    <div class="fields mt-7">
                      <span class="mt-3">Attach an Image</span>
                      <b-form-file v-model="file" ref="file-input" accept="image/*" class="mb-2"></b-form-file>
                    </div>
                  </div>
                  <div class="modal-button">
                    <b-button class="mt-2 mr-3" variant="info" @click="hideModal">Submit</b-button>
                    <b-button class="mt-2" variant="info" @click="toggleModal">Cancel</b-button>
                  </div>
                </b-modal>
              </div>
      </section>

        <section class="main-section">
            <div class="main-body">
                <div class="row .mx-lg-n5 ">
                    <div class="col-3">
                        <div class="card card-style mb-3">
                          <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h6 class="card-title">Pharmacology</h6>
                            <p class="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card card-style">
                          <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h6 class="card-title">Pharmacology</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card card-style">
                          <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h6 class="card-title">Pharmacology</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card card-style">
                          <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h6 class="card-title">Pharmacology</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card card-style">
                          <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h6 class="card-title">Pharmacology</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card card-style">
                          <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h6 class="card-title">Pharmacology</h6>
                            <p class="card-text">Some quick example text to build on the card title and make</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card card-style">
                          <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h6 class="card-title">Pharmacology</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card card-style">
                          <img src="../assets/img/selective-focus-photo-of-pink-tablets-2919591.png" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h6 class="card-title">Pharmacology</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </main>
</template>

<script>
export default {

}
</script>

<style>
 .header{
     display: flex;
     justify-content: space-between;
   }   
    .page-name h6{
      font-weight: 700;
      color: #292929;
    }
    .page-name p{
      font-weight: 500;
      color: #9F9F9F;
      font-size: 12px;
      margin-top: -8px;
    }
    .card-style{
      border: none;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1 );
    }
    .card-style p{
        font-size: 12px;
        color: #9F9F9F;
    }
    .card-style h5{
        color: #292929;
    }
    .right-page-name p{
         color: #292929;
         font-size: 14px;
    }
    .right-page-name select{
        width: 102px;
    }
</style>