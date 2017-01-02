import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click(selectedItem) {
      this.set('items', this.get('items').map((item) => {
        if (item.id === selectedItem.id) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
        return item;
      }));
    }
  },
});
