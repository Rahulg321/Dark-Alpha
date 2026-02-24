import { Content } from "@prismicio/client";
import Link from "next/link";
import CareerFormDialog from "./dialogs/CareerFormDialog";
const CareerCard = ({ post }: { post: Content.CareerDocument }) => {
  const { data } = post;
  const { title, department, excerpt, hire_level } = data;

  const meta = [department, hire_level].filter(Boolean).join(" · ");

  return (
    <li className="py-6">
      <Link href={`/careers/${post.uid}`} className="group block">
        <h2 className="text-base font-medium text-foreground sm:text-lg">
          {title}
        </h2>
        {meta && (
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            {meta}
          </p>
        )}
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>
        )}
      </Link>
      <div className="mt-3 flex items-center gap-3">
        <Link
          href={`/careers/${post.uid}`}
          className="text-sm text-foreground underline-offset-4 hover:underline"
        >
          Details
        </Link>
        <span className="text-muted-foreground">·</span>
        <CareerFormDialog post={post} />
      </div>
    </li>
  );
};

export default CareerCard;
