import computed from 'ember-addons/ember-computed-decorators';

export default Ember.Controller.extend({
  @computed
  title() {
    return I18n.t("anniversaries.today.title", { date: moment().add(1, 'day').format("MMMM Do") } );
  },

  actions: {
    loadMore() {
      this.get("model").loadMore();
    }
  }
});
