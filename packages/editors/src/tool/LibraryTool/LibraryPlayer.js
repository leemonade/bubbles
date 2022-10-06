import { AssetPlayer } from '@bubbles-ui/leemons';
import { NodeViewWrapper } from '@tiptap/react';

export const LibraryPlayer = (props) => {
  return (
    <NodeViewWrapper className="react-component">
      {!props?.node?.attrs?.asset || isEmpty(props?.node?.attrs?.asset) ? null : (
        <AssetPlayer
          asset={props.node.attrs.asset}
          fileType={props.node.attrs.asset.fileType || 'image'}
          showPlayer
          height="auto"
        />
      )}
    </NodeViewWrapper>
  );
};
