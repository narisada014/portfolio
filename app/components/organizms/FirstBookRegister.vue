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
    <div class="register-container">
      <div class="upload-image">
        <h1 class="book-image-label">本の表紙画像</h1>
        <el-upload
          class="avatar-uploader"
          action=""
          :auto-upload="false"
          :on-change="handleAdd"
          :before-upload="beforeAvatarUpload"
          :show-file-list="false"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="register-button">
        <el-button class="register-book" size="mini" type="default" @click="handleSave">1冊目の本を登録する</el-button>
      </div>
    </div>
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
        this.$emit('increment-index')
      }
    }
  }
</script>

<style>
  @media screen and (min-width: 767px) {
    .books-register {
      font-family:"Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体",serif;
      display: flex;
      flex-direction: column;
      width: 500px;
      margin: auto;
      padding-top: 70px;
    }

    .page-title {
    }

    .input-area {
      align-self: center;
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

    .register-container {
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .upload-image {
    }

    .register-button {
      margin-left: auto;

    }

    .register-book {
      height: 50px;
      width: 160px;
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
  }
</style>
