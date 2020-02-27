import {postLogin} from '../services/account';
import {message} from '@antd'

export default {
    namespace: 'account',

    state: {
        userInfo: {},
    },

    effects: {
        * fetch(_, {call, put}) {
            const response = yield call(queryUsers);
            yield put({
                type: 'save',
                payload: response,
            });
        },
        * login({payload, callback}, {call, put}) {
            const response = yield call(postLogin);
            if(!response) {
                return
            }
            if (response.error) {
                message.error();
                return
            }
            yield put({
                type: 'saveLogin',
                payload: response
            })
        }
    },

    reducers: {

        changeLoginStatus(state, {payload}) {

            setAuthority(payload.currentAuthority);
            return {
                ...state,
                status: payload.status,
                type: payload.type,
                message: payload.message
            };
        },
        saveLoginType(state, {payload}) {
            return {
                ...state,
                loginType: payload
            }
        },
        save(state, action) {
            return {
                ...state,
                list: action.payload,
            };
        },
    }
}