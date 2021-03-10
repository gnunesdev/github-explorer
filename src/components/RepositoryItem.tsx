interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name ?? "Default"}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank">
        acessar repositório
      </a>
    </li>
  );
}
