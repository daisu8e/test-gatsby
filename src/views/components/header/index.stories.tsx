import React from "react"
import { storiesOf } from "@storybook/react"

import Header from "./index"

storiesOf(`components/header`, module)
.add(`default`, () => <Header siteTitle={`Site Title`} />)
