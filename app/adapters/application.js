import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';

const { JSONAPIAdapter } = DS;
const { host, namespace } = config.DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
    authorizer: 'authorizer:oauth2',
    host,
    namespace,

    urlForCreateRecord(modelName, snapshot) {
        switch(modelName) {
            case 'comment':
            case 'comments':
                let postURL = this.urlForFindRecord(snapshot.belongsTo('post').id, 'post', snapshot);
                return `${postURL}/comments`;
            default:
              return this._super(...arguments);
        }
    },
    urlForUpdateRecord(id, modelName, snapshot) {
        switch(modelName) {
            case 'comment':
            case 'comments':
                let postURL = this.urlForFindRecord(snapshot.belongsTo('post').id, 'post', snapshot)
                return `${postURL}/comments/${snapshot.id}`;
            default:
              return this._super(...arguments);
        }
    },
    urlForDeleteRecord(id, modelName, snapshot) {
        switch(modelName) {
            case 'comment':
            case 'comments':
                let postURL = this.urlForFindRecord(snapshot.belongsTo('post').id, 'post', snapshot);
                return `${postURL}/comments/${snapshot.id}`;
            default:
              return this._super(...arguments);
        }
    }
});