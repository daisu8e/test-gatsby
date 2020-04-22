import React from "react"
import { storiesOf } from "@storybook/react"

import FontAwesome from "./index"

storiesOf(`components/icons/font-awesome`, module)
.add(`default`, () => <div style={{fontSize: '100px', margin: '50px'}}><FontAwesome /></div>)
