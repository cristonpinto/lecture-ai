import { PageHeader } from "@/components/common/page-header";
import { UploadZone } from "@/components/upload/upload-zone";

export default function UploadPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Upload"
        title="Start with a lecture recording."
        description="A production-style upload experience that simulates future backend processing while preserving the final integration shape."
      />
      <UploadZone />
    </div>
  );
}
