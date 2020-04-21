import React from "react"
import { storiesOf } from "@storybook/react"

import SourceCodePro from "./index"

storiesOf(`services/fonts/source-code-pro`, module)
.add(`default`, () => (
  <>
    <SourceCodePro />
    <div style={{ fontFamily: `SourceCodePro` }}>
      I'm Daisuke Katsumata & Aug 22, 1981.
    </div>
  </>
))
