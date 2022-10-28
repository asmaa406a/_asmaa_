<script>
    export let onSubmit;
    export let onCancel;
    import Cam from "../images/Cam.png";
    import Thanking from "./Thanking.svelte";
    import supabase  from "../routes/supabase";
    let email = "";
     let password = "";
   let login=false;
    let send = false;
    let rating = undefined;
    let experience = "";
    let attachment = null;
    function sendFeedback(node) {
    try {
      loading = true
      const user = supabase.auth.Feedback()

      supabase
        .from('feedback')
        .insert(`id, opinion,user_id,rating `)
        .eq('id', user?.id)
        .single()
        .then(({ data, error, status }) => {
          if (data) {
         opinion = data.opinion
         user_id = data.user_id
          rating = data.rating
          }
          if (error && status !== 406) throw error
        })
    } catch (error) {
      alert(error.message)
    } finally {
      loading = false
    }
  }
  </script>
  
  <form
    id="usrform"
    on:submit|preventDefault={() => {
      send = true;
      onSubmit({ rating, experience, attachment });
    }}
  >
    {#if send}
      <Thanking />
    {:else}
      <main class="popup-container">
        <div class="popup">
          <div class="etoil">
            <p class="beta">BETA Feedback</p>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              id="close"
              on:click={() => {
                onCancel();
              }}
            >
              ✖
            </div>
          </div>
          <div class="midle">
            <h4 id="how">How do you like the new Invoices?</h4>
  
            <input
              type="radio"
              name="buttons"
              id="btn1"
              value="1"
              bind:group={rating}
            />
            <input
              type="radio"
              name="buttons"
              id="btn2"
              value="2"
              bind:group={rating}
            />
            <input
              type="radio"
              name="buttons"
              id="btn3"
              value="3"
              bind:group={rating}
            />
            <input
              type="radio"
              name="buttons"
              id="btn4"
              value="4"
              bind:group={rating}
            />
            <input
              type="radio"
              name="buttons"
              id="btn5"
              value="5"
              bind:group={rating}
            />
  
            <div class="icons">
              <label for="btn1">🙁</label>
              <label for="btn2">😐</label>
              <label for="btn3">😊</label>
              <label for="btn4">😀</label>
              <label for="btn5">😍</label>
            </div>
  
            <label for="experience" class="tell"
              >Tell us about your experience:</label
            >
          </div>
          <textarea
            id="experience"
            name="experience"
            maxlength="1000"
            placeholder="1000"
            bind:value={experience}
          />
          <div class="ca">
            <img src={Cam} alt="" class="cam" />
            <input
              type="file"
              id="file"
              accept="image/*"
              bind:value={attachment}
            />
            <label for="file" class="file-trigger">Add screenshot</label>
          </div>
          <div class="buttons">
            <input
              type="submit"
              class="can"
              value="Cancel"
              on:click|preventDefault={onCancel}
            />
  
            <input type="submit" class="sub" value="Submit" />
          </div>
          <span class="span"></span>
        </div>
      </main>
    {/if}
  </form>
  <style>
    main {
      position: relative;
      border: 1px solid gray;
      border-radius: 3px;
      margin: auto;
      height: auto;
      width: 100%;
      z-index:0;
      font-family: "Open Sans", sans-serif;
      box-shadow: -1px 62px 42px -41px gray;
      -webkit-box-shadow: -1px 62px 42px -41px gray;
      -moz-box-shadow: -1px 62px 42px -41px gray;
    }
    .span{
      position: absolute;
      content: "";
  z-index: -213;
      bottom: -11px;
      left: 90%;
      width: 20px;
      height: 20px;
      border: 1px solid gray;
      background:white;
      transform: rotate(45deg);
    }
  
    #experience {
      height: 120px;
      width: 100%;
      color: #95b8b8;
    }
    .midle {
      display: flex;
      flex-direction: column;
    }
  
    .buttons {
      display: flex;
      gap:0px;
      font-size: 60px;
      font-family: "sans-serif";
      padding-bottom: 10px;
      justify-content: right;
    }
    .etoil {
      display: flex;
      justify-content: space-between;
    }
    #close {
      line-height: 40px;
      cursor: pointer;
      margin-top: 10px;
      font-size: 30px;
    }
    .can {
      /* margin-right: 0px; */
      font-size: 15px;
      /* padding-bottom: 20px; */
      background-color: white;
    }
    .sub {
      font-size: 15px;
      background-color: rgb(0, 166, 255);
      color: white;
      /* width: 12px;
        height: 33px; */
    }
    #file {
      display: none;
    }
    .file-trigger {
      color: rgb(0, 166, 255);
  
      font-size: 18px;
      /* height: 25px; */
      /* width: 25px; */
      margin-top: 15px;
    }
  
    input[type="submit"] {
      /* display:inline; */
      display: flex;
  
      padding: 12px 50px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 30px;
      margin-bottom: 20px;
    }
  
    input[type="submit"]:hover {
      background-color: rgb(0, 162, 255);
    }
    .cam {
      height: 25px;
      width: 25px;
      margin-top: 15px;
    }
  
    /*  */
    .popup-container .popup input[type="radio"] {
      display: none;
    }
  
    .popup-container .popup .icons {
      padding: 10px;
      display: flex;
      flex-direction: row;
    }
    .popup-container {
      margin: auto;
    }
  
    .popup-container .popup .icons label {
      font-size: 45px;
      cursor: pointer;
    }
  
    .popup-container .popup #btn1:checked ~ .icons label:nth-child(1),
    .popup-container .popup #btn2:checked ~ .icons label:nth-child(2),
    .popup-container .popup #btn3:checked ~ .icons label:nth-child(3),
    .popup-container .popup #btn4:checked ~ .icons label:nth-child(4),
    .popup-container .popup #btn5:checked ~ .icons label:nth-child(5),
    .popup-container .popup .icons label:hover {
      opacity: 1;
      font-size: 70px;
    }
  
    /* .popup-container{
        display:flex;
    }  */
  
    .popup-container .popup #close:active {
      height: 27px;
      right: 6px;
      text-indent: -9999px;
      width: 26px;
    }
    #usrform {
      display: flex;
  
      font-size: 20px;
    }
    .popup {
      margin-left: 30px;
      margin-right: 30px;
      display: flex;
      flex-direction: column;
    }
    .tell {
      padding-top: 40px;
    }
    .ca {
      display: flex;
      gap: 10px;
    }
  </style>
  