import tap from 'tap'
import { hello } from '../main'

tap.same(hello(), "hello world", "says hello world")