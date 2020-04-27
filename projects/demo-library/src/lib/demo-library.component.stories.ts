import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { DemoLibraryComponent } from './demo-library.component';

export default {
  title: 'Labeltje',
  component: DemoLibraryComponent,
};

export const Text = () => ({
  component: DemoLibraryComponent
});

Text.story = {
  parameters: { notes: 'My notes on a basic angular component' }
}
