<template>
  <div class="pdf-app-demo">
    <h1>多個 PDF 實例演示</h1>

    <div class="pdf-instances">
      <div class="pdf-instance">
        <h3>PDF 實例 1</h3>
        <pdf-viewer
          :pdf="pdf1"
          :instance-id="'pdf1'"
          :theme="'light'"
          style="height: 500px; border: 1px solid #ccc"
        />
      </div>

      <div class="pdf-instance">
        <h3>PDF 實例 2</h3>
        <pdf-viewer
          :pdf="pdf2"
          :instance-id="'pdf2'"
          :theme="'dark'"
          style="height: 500px; border: 1px solid #ccc"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PdfViewer from "@/components/pdf-viewer.vue";

export default defineComponent({
  name: "PdfAppDemo",
  components: {
    PdfViewer,
  },
  setup() {
    const pdf1 = ref("/sample.pdf");
    const pdf2 = ref("/sample.pdf");

    return {
      pdf1,
      pdf2,
    };
  },
});
</script>

<style scoped>
.pdf-app-demo {
  padding: 20px;
}

.pdf-instances {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.pdf-instance {
  margin-bottom: 20px;
}

.pdf-instance h3 {
  margin-bottom: 10px;
  color: #333;
}
</style>
