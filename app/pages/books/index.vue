<template>
  <div>
    <h1>本のコレクション作成</h1>
    <el-input
      class="title"
      type="input"
      autosize
      placeholder="本のタイトルを入力してください"
      v-model="title"
    >
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      class="book-textarea"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="本の概要・本同士の関連性を記入してください"
      v-model="textarea">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-upload
      class="avatar-uploader"
      drag
      action=""
      :auto-upload="false"
      :on-change="handleAdd"
      :before-upload="beforeAvatarUpload"
      :show-file-list="false"
      >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-button size="mini" type="primary" @click="handleSave">本を登録する</el-button>
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
      }
    }
  }
</script>

<style>
  .title {
    width: 500px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .book-textarea {
    width: 500px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload-dragger {
    width: 180px;
  }
</style>
