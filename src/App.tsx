import { Input, Select, Button } from "ant-design-vue";
import { defineComponent, ref } from "vue";

import "ant-design-vue/dist/antd.css";

import styles from "./App.module.less";

export const PropsDef = {};
export default defineComponent({
  props: PropsDef,
  setup() {
    const cls = ref(styles.cls1);

    return () => {
      return (
        <div>
          <Input value="11" class={cls.value} />
          <br />
          <Select value="11" class={cls.value}>
            <Select.Option value="11">11</Select.Option>
          </Select>
          <br />
          <Button
            onClick={() => {
              cls.value = styles.cls2;
            }}
          >
            click
          </Button>
        </div>
      );
    };
  },
});
