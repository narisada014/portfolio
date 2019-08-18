<template>
  <div class="books-register">
    <h1 class="page-title">本のコレクション作成</h1>
    <div class="input-area">
      <h1 class="title-label">タイトル</h1>
      <el-input
        class="title"
        type="input"
        autosize
        placeholder="本のタイトルを入力してください"
        v-model="title"
      >
      </el-input>
      <div style="margin: 20px 0;"></div>
      <h1 class="content-label">内容</h1>
      <el-input
        class="book-textarea"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="本の概要・本同士の関連性を記入してください"
        v-model="textarea">
      </el-input>
    </div>
    <div style="margin: 20px 0;"></div>
    <div class="upload-container">
      <h1 class="book-image-label">本の表紙画像</h1>
      <el-upload
        class="avatar-uploader"
        action=""
        :auto-upload="false"
        :on-change="handleAdd"
        :before-upload="beforeAvatarUpload"
        :show-file-list="false"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <el-button class="register-book" size="mini" type="default" @click="handleSave">1冊目の本を登録する</el-button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        imageUrl: '',
        title: '',
        textarea: '',
        numberOfBooks: 0,
        // vuexに移動
        isSuccessResponse: false
      }
    },
    methods: {
      handleAdd: async function (file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        const response = await axios.get('http://localhost:3000/users/upload')
        axios.put(response.data.url, file.raw, {
          headers: {
            "Content-Type": file.raw.type
          }
        }).then(res => {
          this.isSuccessResponse = true
          console.log(res)
        })
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('Avatar picture must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Avatar picture size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleSave() {
        console.log('hoge')
        console.log(this.numberOfBooks)
        this.numberOfBooks = this.numberOfBooks + 1
      }
    }
  }
</script>

<style>
  .books-register {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 30px 169px 200px;
    grid-column-gap: 20px;
  }
  .page-title {
    grid-row: 1;
    grid-column: 1 / 4;
  }
  .input-area {
    grid-row: 2;
    grid-column: 2 / 5;
    padding-left: 65px;
    padding-top: 30px;
  }
  .title-label {
    color: black;
    opacity: .5;
  }
  .title {
    width: 500px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .content-label {
    color: black;
    opacity: .5;
  }
  .book-textarea {
    width: 500px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .book-image-label {
    color: black;
    opacity: .6;
  }
  .upload-container {
    overflow: hidden;
    grid-row: 3;
    grid-column: 2;
    padding-top: 50px;
    padding-left: 65px;
  }
  .register-book {
    grid-row: 3;
    grid-column: 4;
    height: 50px;
    width: 160px;
    margin-top: 100px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
