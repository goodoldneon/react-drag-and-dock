import React from 'react';
import PropTypes from 'prop-types';

import Panel from '../Panel';

const PanelContainer = React.forwardRef((props, ref) => {
  const { panels } = props;
  const panelElems = [];
  let zIndex = 0;

  panels.forEach((panel, panelUid) => {
    if (!panelUid) return;

    zIndex += 1;

    const elem = (
      <Panel
        key={panelUid} // eslint-disable-line react/no-array-index-key
        {...panel.props}
        uid={panelUid}
        zIndex={zIndex}
      />
    );

    panelElems.push(elem);
  });

  return <div ref={ref}>{panelElems}</div>;
});

PanelContainer.propTypes = {
  panels: PropTypes.instanceOf(Map).isRequired,
};

export default PanelContainer;