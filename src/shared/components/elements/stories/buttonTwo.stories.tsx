import Button from '../Button'

export default {
  title: 'Button 2',
  argTypes: { onClick: { action: 'clicked' } },
}

const ButtonTwo = (args) => <Button {...args}>Text</Button>

export const withButtonTwo = ButtonTwo.bind({})

withButtonTwo.args = {}
