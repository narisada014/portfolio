'use strict';

import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { config } from "../../aws-exports"

Amplify.configure(config)

Vue.use(AmplifyModules)
