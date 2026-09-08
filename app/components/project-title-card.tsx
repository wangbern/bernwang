import { Link } from "react-router";

type ProjectTitleCardProps = {
  image: string;
  title: string;
  description: string;
};

export function ProjectTitleCard({
  image,
  title,
  description,
}: ProjectTitleCardProps) {
  const search = new URLSearchParams({ title }).toString();

  return (
    <Link to={`/project?${search}`} className="project-title-card">
      <img
        src={image}
        alt=""
        className="project-title-card__image"
        draggable={false}
      />
      <h2 className="project-title-card__title">{title}</h2>
      <p className="project-title-card__description">{description}</p>
    </Link>
  );
}
