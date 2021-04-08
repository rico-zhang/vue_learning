<template>
  <div class="sale-detail">
    <a-form-model
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 13 }"
      ref="ruleForm"
      :model="form"
      :rules="rules"
    >
      <a-form-model-item label="商品售价" required prop="price">
        <a-input v-model="form.price" />
      </a-form-model-item>
      <a-form-model-item label="折扣价格" prop="price_off">
        <a-input v-model="form.price_off" />
      </a-form-model-item>
      <a-form-model-item label="商品库存" required prop="inventory">
        <a-input v-model="form.inventory" />
      </a-form-model-item>

      <a-form-model-item label="计量单位" required prop="unit">
        <a-input v-model="form.unit" />
      </a-form-model-item>

      <a-form-model-item label="商品相册" prop="images">
        <a-upload
          :action="
            'https://mallapi.duyiedu.com/upload/images?appkey=' +
            $store.state.user.appkey
          "
          list-type="picture-card"
          :file-list="fileList"
          @preview="handlePreview"
          @change="handleChange"
          name="avatar"
        >
          <div v-if="fileList.length < 8">
            <a-icon type="plus" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
        <a-modal
          :visible="previewVisible"
          :footer="null"
          @cancel="handleCancel"
        >
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="default" @click="prev()"> 上一步 </a-button>
        <a-button type="primary" @click="finish()"> 完成 </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  data() {
    return {
      rules: {},
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  },
  props: ['form'],
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      const fileex = file;
      if (!fileex.url && !fileex.preview) {
        fileex.preview = await getBase64(fileex.originFileObj);
      }
      this.previewImage = fileex.url || fileex.preview;
      this.previewVisible = true;
    },
    handleChange({ file, fileList }) {
      if (file.status === 'done') this.form.images.push(file.response.data.url);
      else if (file.status === 'removed') {
        const { url } = file.response.data;
        this.form.images = this.form.images.filter((item) => item !== url);
      }
      this.fileList = fileList;
    },
    prev() {
      this.$emit('prev');
    },
    finish() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('finish');
          return true;
        }
        return false;
      });
    },
  },
  created() {
    if (this.form.images.length) {
      this.fileList = this.form.images.map((item, index) => ({
        uid: index,
        name: item.slice(item.lastIndexOf('/') + 1),
        status: 'done',
        url: item,
      }));
    }
  },
};
</script>
