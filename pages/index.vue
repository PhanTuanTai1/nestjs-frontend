<template>
  <div class="fullscreen-wrapper">
    <div class="sc-ifAKCX jXBzoa">
      <h1 class="sc-bxivhb fHAFMT">Hello!</h1>
      <p>Fill in your username and password to sign in.</p>
      <div>
        <div
          class="MuiFormControl-root MuiFormControl-marginDense MuiTextField-root sc-EHOje YINzU"
        >
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense"
          >
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-54 MuiOutlinedInput-notchedOutline"
              style="padding-left: 40.125px"
            >
              <legend
                class="PrivateNotchedOutline-legend-55"
                style="width: 0.01px"
              >
                <span>​</span>
              </legend>
            </fieldset>
            <input
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              id="outlined-name"
              type="text"
              placeholder="Username"
              v-model='username'
            />
          </div>
        </div>
      </div>
      <div>
        <div
          class="MuiFormControl-root MuiFormControl-marginDense MuiTextField-root sc-EHOje YINzU"
        >
          <div
            class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense"
          >
            <fieldset
              aria-hidden="true"
              class="PrivateNotchedOutline-root-54 MuiOutlinedInput-notchedOutline"
              style="padding-left: 38.625px"
            >
              <legend
                class="PrivateNotchedOutline-legend-55"
                style="width: 0.01px"
              >
                <span>​</span>
              </legend>
            </fieldset>
            <input
              aria-invalid="false"
              class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
              id="outlined-name"
              type="password"
              v-model='password'
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-containedPrimary MuiButton-contained MuiButton-fullWidth"
          tabindex="0"
          type="button"
          style="margin-bottom: 10px"
          @click="signIn()"
        >
          <span class="MuiButton-label">SIGN IN</span
          ><span class="MuiTouchRipple-root"></span></button
        ><button
          class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-fullWidth"
          tabindex="0"
          type="button"
        >
          <span class="MuiButton-label"
            >Don't have an account? Sign up now!</span
          ><span class="MuiTouchRipple-root"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { userModule, taskModule } from "~/store";

@Component({})
export default class IndexPage extends Vue {
  username: string = "";
  password: string = "";
  // async postTest(username: string, password: string) {
  //   let data = await SignIn("/signin", {
  //     username: "taipt7",
  //     password: "Abc12345",
  //   });
  //   console.log("data", data);
  //   return data;
  // }

  async created() {
    if(process.client) {
      if(localStorage.getItem('token')) {
        let token = localStorage.getItem('token');
        await taskModule.getAllTasks(token);
      }
    }
  }

  async signIn() {
    await userModule.signIn({username: this.username, password: this.password});
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
