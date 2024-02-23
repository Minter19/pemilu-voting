import express from 'express'
import { transactions_middleware } from './transactions_middleware.js'
import { get_users_pemilu } from './get_users_pemilu.js'
import { post_users_pemilu } from './post_users_pemilu.js'
import { get_list } from './get_list.js'
import { get_result_pemilu } from './get_result_pemilu.js'
import { post_result_pemilu } from './post_result_pemilu.js'
import { get_get_info_paslon } from './get_get_info_paslon.js'
import { get_total_data_pemilih } from './get_total_data_pemilih.js'


export const transactions_router = express.Router();
transactions_router.use(transactions_middleware)
transactions_router.get('/users_pemilu', get_users_pemilu)
transactions_router.post('/users_pemilu', post_users_pemilu)
transactions_router.get('/list', get_list)
transactions_router.get('/result_pemilu', get_result_pemilu)
transactions_router.post('/result_pemilu', post_result_pemilu)
transactions_router.get('/get_info_paslon', get_get_info_paslon)
transactions_router.get('/total_data_pemilih', get_total_data_pemilih)

