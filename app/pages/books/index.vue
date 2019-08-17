<template>
  <div>
    <h1>本のコレクション作成</h1>
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
    <el-button size="mini" type="primary" @click="handleUpload">選択した画像をアップロードする</el-button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        imageUrl: ''
      }
    },
    methods: {
      handleAdd: function (file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleUpload: async function() {
        const signedUrl = await axios.get('http://localhost:3000/users/upload')
        console.log(signedUrl)
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
      }
    }
  }
</script>

<style>
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
</style>
