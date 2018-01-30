import Template from '@/component/Template';
import StandardVue from './StandardVue.vue';
import JSXComponent from './JSXComponent.vue';

export default {
  data: () => ({
    standard: require('!raw-loader!docs-loader!./StandardVue.vue'),
    jsx: require('!raw-loader!docs-loader!./JSXComponent.vue'),
  }),
  render() {
    return (
      <Template
        standard={this.standard}
        jsx={this.jsx}>
        <h1 slot="title">04 Inner Component</h1>
        <StandardVue slot="standard" />
        <JSXComponent slot="jsx" />
      </Template>
    );
  },
};
