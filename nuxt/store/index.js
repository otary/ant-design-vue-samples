import Locale from '~/locales'

/**
 * 全局变量
 * @returns {{locales, locale: *}}
 */
export const state = () => ({
    locales: Locale(),
    locale: Locale()[0]
})

export const mutations = {
    /**
     * @param locale 当前选中的国际化标识
     * @constructor
     */
    SET_LANG (state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}

export const actions = {
    /**
     * @param commit 国际化修改
     * @param val 国际化标识
     */
    updateLang ({commit}, val) {
        commit('SET_LANG', val)
    }
}

