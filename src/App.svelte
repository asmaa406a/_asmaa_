<script>
    import Feedback from "./Components/Feedback.svelte";
    import Thanking from "./Components/Thanking.svelte";
    
    let canceled = false;
  </script>
  <!-- <Login/> -->
    
  {#if !canceled}
    <Feedback
      onSubmit={(data) => console.log("Feedback: ", data)}
      onCancel={() => {
        console.log("cancel");
        canceled = true;
      }}
    />
  {/if}
  
  <style>
  </style>
  