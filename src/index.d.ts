/// <reference types="react" />

export interface Props {
  id: string;
  appletOnLoad: () => void;
  appName?: string;
  width?: number;
  height?: number;
  material_id?: string;
  filename?: string;
  ggbBase64?: string;
  borderColor?: string;
  enableRightClick?: boolean;
  enableLabelDrags?: boolean;
  enableShiftDragZoom?: boolean;
  showZoomButtons?: boolean;
  errorDialogsActive?: boolean;
  showToolBar?: boolean;
  showAlgebraInput?: boolean;
  showMenuBar?: boolean;
  showToolBarHelp?: boolean;
  customToolBar?: string;
  showResetIcon?: boolean;
  language?: string;
  country?: string;
  allowStyleBar?: boolean;
  useBrowserForJS?: boolean;
  showLogging?: boolean;
  capturingThreshold?: number;
  enableFileFeatures?: boolean;
  perspective?: string;
  enable3d?: boolean;
  enableCAS?: boolean;
  algebraInputPosition?: string;
  preventFocus?: boolean;
  scaleContainerClass?: string;
  autoHeight?: boolean;
  allowUpscale?: boolean;
  playButton?: boolean;
  scale?: number;
  showAnimationButton?: boolean;
  showFullscreenButton?: boolean;
  showSuggestionButtons?: boolean;
  showStartTooltip?: boolean;
  rounding?: string;
  buttonShadows?: boolean;
  buttonRounding?: number;
  buttonBorderColor?: string;
  editorBackgroundColor?: string;
  editorForegroundColor?: string;
  textmode?: boolean;
  keyboardType?: string;
  //custom props
  debug?: boolean;
  onReady?: () => void;
  LoadComponent?: () => JSX.Element;
}
declare function Geogebra(props: Props): JSX.Element;
declare namespace Geogebra {
  var defaultProps: {
    appName: string;
    width: number;
    height: number;
    showToolBar: boolean;
    showAlgebraInput: boolean;
    showMenuBar: boolean;
  };
}
export default Geogebra;
